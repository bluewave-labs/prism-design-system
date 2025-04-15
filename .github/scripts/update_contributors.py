import os
import requests
import re


def get_contributors():
    """Fetch contributors from GitHub API."""
    headers = {
        "Authorization": f'token {os.environ["GITHUB_TOKEN"]}',
        "Accept": "application/vnd.github.v3+json",
    }
    owner = "debserra"
    repo = "prism-design-system"
    url = f"https://api.github.com/repos/{owner}/{repo}/contributors"

    response = requests.get(url, headers=headers)
    if response.status_code == 200:
        return response.json()
    else:
        print(f"Error fetching contributors: {response.status_code}")
        return []


def update_readme(contributors):
    """Update README.md with contributors section."""
    readme_path = "README.md"

    # Read current README
    with open(readme_path, "r") as f:
        content = f.read()

    # Generate contributors section
    contributors_section = "## Contributors\n\n"
    for contributor in contributors:
        username = contributor["login"]
        avatar_url = contributor["avatar_url"]
        html_url = contributor["html_url"]
        contributors_section += f'<a href="{html_url}"><img src="{avatar_url}" width="50" height="50" alt="{username}"/></a>\n'

    # Update or add contributors section
    if "## Contributors" in content:
        # Replace existing section
        content = re.sub(
            r"## Contributors\n\n.*?(?=##|$)",
            contributors_section,
            content,
            flags=re.DOTALL,
        )
    else:
        # Add new section before License
        content = content.replace("## License", f"{contributors_section}\n## License")

    # Write updated README
    with open(readme_path, "w") as f:
        f.write(content)


def main():
    contributors = get_contributors()
    if contributors:
        update_readme(contributors)
        print("Successfully updated contributors in README.md")
    else:
        print("No contributors found or error occurred")


if __name__ == "__main__":
    main()
