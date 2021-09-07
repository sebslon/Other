import { GlobalStyles } from "./GlobalStyles";
import { AppContainer, Content } from "./styles/TwitterClone.styles";

import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Navbar } from "./components/Navbar/Navbar";
import { PostsSection } from "./components/PostsSection/PostsSection";

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
