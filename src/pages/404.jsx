import Layout from "@/components/Layout";
import Link from "next/link";

const FourOFour = () => {
  return (
    <Layout>
      <main className="four_not-found">
        <h1>Ops, Nothing Found!!</h1>
        <p>
          {`Sorry, couldn't find anything. Either the entered URL is incorrect,
          broken or doesn't exist.`}
        </p>
        <p>
          Please go to homepage and check our content curated by our
          professionals.
        </p>
        <button>
          <Link href="/">Go to MainPage</Link>
        </button>
      </main>
    </Layout>
  );
};

export default FourOFour;
