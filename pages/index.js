import Category from "../components/Category";
import Questions from "../components/Questions";

export default function Home() {
  return (
    <div>
      <main>
        <div className="container">
          <Category />
          <Questions />
        </div>
      </main>
    </div>
  );
}
