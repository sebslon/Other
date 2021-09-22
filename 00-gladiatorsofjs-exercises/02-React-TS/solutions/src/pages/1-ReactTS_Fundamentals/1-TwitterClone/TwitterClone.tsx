import { GlobalStyles } from "./styles/GlobalStyles";
import { AppContainer, Content } from "./styles/TwitterClone.styles";

import { Header, Navbar, PostsSection, Sidebar } from "./components";

export const TwitterClone = () => {
  return (
    <>
      <GlobalStyles />
      <AppContainer>
        <Navbar />
        <Content>
          <Header />
          <PostsSection />
        </Content>
        <Sidebar />
      </AppContainer>
    </>
  );
};
