import { asyncHandler } from "../utils/async_Handler.js";
import { getRepoData } from "../services/github.service.js";
import { generateReadme } from "../services/readme.service.js";

console.log(`hellooo`);
console.log(`${process.env.GEMINI_API_KEY} `);

const isValidGithubUrl = (parsedUrl) => {
  return (
    parsedUrl.hostname === "github.com" &&
    parsedUrl.pathname.split("/").filter(Boolean).length === 2
  );
};

const analyser = asyncHandler(async (req, res) => {
  const { repoUrl } = req.body;

  if (!repoUrl) {
    return res.status(400).json({
      success: false,
      message: "Repo URL is required"
    });
  }

  let parsedUrl;

  try {
    parsedUrl = new URL(repoUrl);
  } catch {
    return res.status(400).json({
      success: false,
      message: "Invalid URL format"
    });
  }

  if (!isValidGithubUrl(parsedUrl)) {
    return res.status(400).json({
      success: false,
      message: "Invalid GitHub repository URL"
    });
  }

  const [owner, repo] = parsedUrl.pathname.split("/").filter(Boolean);

  const repoData = await getRepoData(owner, repo);
  const readme = await generateReadme(repoData);

  return res.status(200).json({
    success: true,
    repository: `${owner}/${repo}`,
    context: repoData,
    readme
  });
});

export { analyser };