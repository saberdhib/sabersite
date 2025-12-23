import { fetchGithubRepos } from "../../lib/api";

type Repo = {
  id: number;
  name: string;
  description: string;
  html_url: string;
};

export default async function ProjectsPage() {
  const repos: Repo[] = await fetchGithubRepos();

  return (
    <main className="p-12 space-y-8">
      <h1 className="text-3xl font-bold">Projects</h1>

      <ul className="grid gap-4">
        {repos.map((repo) => (
          <li
            key={repo.id}
            className="border rounded-md p-4 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition"
          >
            <a
              href={repo.html_url}
              target="_blank"
              className="font-semibold"
            >
              {repo.name}
            </a>
            {repo.description && (
              <p className="text-sm opacity-80 mt-1">
                {repo.description}
              </p>
            )}
          </li>
        ))}
      </ul>
    </main>
  );
}
