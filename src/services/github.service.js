import axios from "axios";

const headers = {
  "User-Agent": "readme-generator"
};

const dependencyFiles = [
  "package.json",     // Node
  "requirements.txt", // Python
  "Cargo.toml",       // Rust
  "go.mod",           // Go
  "pom.xml",          // Java
  "composer.json",    // PHP
  "Gemfile"           // Ruby
];

const parsers = {

  "package.json": (content) => {
    const json = JSON.parse(content);
    return Object.keys(json.dependencies || {});
  },

  "requirements.txt": (content) => {
    return content
      .split("\n")
      .map(d => d.trim())
      .filter(Boolean);
  },

  "Cargo.toml": (content) => {
    return content
      .split("\n")
      .filter(line => line.includes("="))
      .map(line => line.split("=")[0].trim());
  },

  "go.mod": (content) => {
    return content
      .split("\n")
      .filter(line => line.startsWith("require"))
      .map(line => line.replace("require", "").trim());
  },

  "pom.xml": (content) => {
    const matches = [...content.matchAll(/<artifactId>(.*?)<\/artifactId>/g)];
    return matches.map(m => m[1]);
  },

  "composer.json": (content) => {
    const json = JSON.parse(content);
    return Object.keys(json.require || {});
  },

  "Gemfile": (content) => {
    return content
      .split("\n")
      .filter(line => line.startsWith("gem"))
      .map(line => line.split("'")[1])
      .filter(Boolean);
  }

};

const getRepoData = async (owner, repo) => {

  const repoInfo = await axios.get(
    `https://api.github.com/repos/${owner}/${repo}`,
    { headers }
  );

  const contents = await axios.get(
    `https://api.github.com/repos/${owner}/${repo}/contents`,
    { headers }
  );

  const files = contents.data.map(file => file.name);

  let dependencies = [];

  const availableDependencyFiles = dependencyFiles.filter(file =>
    files.includes(file)
  );

  for (const depFile of availableDependencyFiles) {

    const file = await axios.get(
      `https://api.github.com/repos/${owner}/${repo}/contents/${depFile}`,
      { headers }
    );

    const decoded = Buffer
      .from(file.data.content, "base64")
      .toString("utf-8");

    const parser = parsers[depFile];

    if (parser) {
      dependencies.push(...parser(decoded));
    }

  }

  dependencies = [...new Set(dependencies)];

  return {
    name: repoInfo.data.name,
    description: repoInfo.data.description,
    language: repoInfo.data.language,
    files,
    dependencies
  };
};

export { getRepoData };