
import Collection from "@/components/Home/collection";
import HeroBanner from "@/components/Home/HeroBanner";
import dbConnect from "@/lib/db-connect";
import ProductModel from "@/lib/product-model";
import GridList from "@/components/Home/gridList";
import Recomended from "@/components/Home/recomended";
import Authum from "@/components/Home/authum";
import Whyshop from "@/components/Home/whyshop";
import Special from "@/components/Home/special";


export default async function Home() {
  await dbConnect();
  const productsDoc = (await ProductModel.find().lean());
  const products = await JSON.parse(JSON.stringify(productsDoc));

  return (

    <main>
     <HeroBanner/>
     <Collection/>
     <GridList products={products}/>
     <Recomended products={products}/>
     <Authum/>
     <Whyshop/>
     <Special/>
     </main>
  );
}
