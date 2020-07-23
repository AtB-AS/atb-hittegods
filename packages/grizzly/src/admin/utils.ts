export type HenvendelseType = {
  id: number;
  name: string;
  phone: string;
  color: string;
  email: string;
  subcategory: string;
  description: string;
  matchCount: number;
  newMatchCount: number;
};

export function searchHenvendelse(
  henvendelseToSearch: HenvendelseType[],
  query: string
) {
  if (!query || query === "") {
    return henvendelseToSearch;
  }
  const searchResults = henvendelseToSearch.filter((user) => {
    return (
      user.name.toLocaleLowerCase().includes(query.toLocaleLowerCase()) ||
      user.phone.split(" ").join("").includes(query) ||
      user.description
        .toLocaleLowerCase()
        .includes(query.toLocaleLowerCase()) ||
      user.subcategory
        .toLocaleLowerCase()
        .includes(query.toLocaleLowerCase()) ||
      user.id.toLocaleString().includes(query) ||
      user.color.toLocaleLowerCase().includes(query.toLocaleLowerCase()) ||
      user.email.toLocaleLowerCase().includes(query.toLocaleLowerCase())
    );
  });
  return searchResults;
}
