import { Header } from "pages/TwitterClone/components";
import { Navbar } from "./components/Navbar/Navbar";
import { PostsSection } from "./components/PostsSection/PostsSection";
import { GlobalStyles } from "./GlobalStyles";
import { AppContainer } from "./styles/TwitterClone.styles";

export const TwitterClone = () => {
  return (
    <>
      <GlobalStyles />
      <AppContainer>
        <Header />
        <PostsSection />
        <Navbar />
      </AppContainer>
    </>
  );
};
