export async function fetchGithubRepos() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/github`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch GitHub repos");
  }

  return res.json();
}
