
import dbConnect from "@/lib/db-connect";
import ProductModel from "@/lib/product-model";
import Image from "next/image";
import { FaLock, FaRegCheckCircle } from "react-icons/fa";
import { Box, Button, Heading, Strong, Text } from "@radix-ui/themes";
import Loading from "@/components/Exercises/loading";
import Slider from "@/components/Exercises/Slider";
import AddToFavorite from "@/components/addToFavorite";
import Cardgrid from "@/components/Home/Card";
import { fetchData, youtubeOptions } from '@/utils/fetchData';
import { Console } from "console";

export default async function ProductDetail({ params }: { params: { id: string } }) {

  const id = params.id;

  await dbConnect();
  const productDocs = (await ProductModel.findOne({ id }))
  const product = JSON.parse(JSON.stringify(productDocs));

  const similarProductsDocs = (await ProductModel.find({ bodyPart: product.bodyPart }))
  const similar = JSON.parse(JSON.stringify(similarProductsDocs));

  const youtubeSearchUrl = 'https://youtube-v2.p.rapidapi.com/search';
  const exerciseVideosData = await fetchData
  (`${youtubeSearchUrl}/?query=${product.name}&lang=en&order_by=this_month&country=us `, 
  youtubeOptions);


  return (
    <Loading>
      <div className="flex flex-wrap sm:justify-center lg:justify-start
       mt-[150px] ml-10 text-white">
        <div className="w-[40%]">
          <Image
            src={product.gifUrl}
            alt={product.name}
            width={483}
            height={483}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            className="xl:max-h-[483px] xl:min-h-[483px] xl:min-w-[483px] 
          min-h-[283px] min-w-[283px] max-h-[283px] rounded-md"
            unoptimized
          />
        </div>
        <div className="w-[40%] ml-5">
          <Heading size="8" >{product.name}</Heading>
          <div className="flex text-center mt-4 ">
            <Text size="4"><Strong>Equipment</Strong></Text>&nbsp;&nbsp;
            <Text size="4" >{product.equipment}</Text>
          </div>

          <div className="flex text-center mt-4 ">
            <Text size="4"><Strong>Body Part</Strong></Text>&nbsp;&nbsp;
            <Text size="4" >{product.bodyPart}</Text>
          </div>

          <div className="flex text-center mt-4 ">
            <Text size="4"><Strong>Target</Strong></Text>&nbsp;&nbsp;
            <Text size="4" >{product.target}</Text>
          </div>
          <div className="flex text-center mt-4">
            <Text size="4"><Strong>Secondary Muscles</Strong></Text>&nbsp;&nbsp;
            <ul className="flex ">
              {product.secondaryMuscles.map((muscle: any, index: number) => (
                <li key={index} className="mx-4">
                  <Button variant="ghost" size="4"   >
                  <Text size="4">
                     {muscle}
                  </Text>
                  </Button>
                  
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-5">
            <Text size="4"><Strong>Instructions</Strong></Text><br />
            <ul>
              {product.instructions.map((muscle: any, index: number) => (
                <li key={index} className="flex my-2">
                
                  <Text size="3" >
                  ✔️&nbsp;{muscle}
                  </Text>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div >
          <br />
          <div className="relative max-w-screen-2xl  px-4 py-4 md:py-4 text-left">
            <Heading size="6">
              Popular Exercises based on target muscle
            </Heading>
            <Slider >
              {similar?.map((product: any) => (
                <div key={product.id} className="gap-3" >
                  <Cardgrid product={product} />
                </div>
              ))}
            </Slider>
          </div >
          <br/>
{/* **************************************************************************** */}      
      <Text size="6" >
        Watch <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>
          {product.name}</span> exercise videos
      </Text>
      <Box >
        {exerciseVideosData?.videos.slice(0, 3)?.map((item:any, index:any) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video_id}`}
            target="_blank"
            rel="noreferrer"
          >
            <Image  style={{ borderTopLeftRadius: '20px' }} src={item.thumbnails[0].url} 
            alt={item.title}  width={300}  height={500} />
             
            <Box>
              <Text size="3">
                {item.title}
              </Text>
              <Text  size="2" >
                {item.author}
              </Text>
            </Box>
          </a>
        ))}
      
    </Box>
        </div>
      </div>
    </Loading>
  );
}
