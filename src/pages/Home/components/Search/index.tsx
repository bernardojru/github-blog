import { SearchContainer, PostContainer, PostBox } from "./styles";

export function Search() {
  const n = 8;
  return (
    <SearchContainer>
      <header>
        <h3>Publicações</h3>
        <span>
          {23} publica{n > 1 ? "ções" : "ção"}
        </span>
      </header>
      <form>
        <input type="text" placeholder="Buscar conteúdo" />
      </form>

      <PostContainer>
        <PostBox>
          <div>
            <strong>javascript</strong>
            <span>1 dia</span>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repudiandae neque consectetur dolor aliquam illo, officia voluptas
            molestiae aut, placeat nobis expedita ut est fuga nisi consequuntur
            accusamus soluta magnam molestias!
          </p>
        </PostBox>
      </PostContainer>
    </SearchContainer>
  );
}
