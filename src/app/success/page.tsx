
import { Button } from "@radix-ui/themes";
import Clearcart from "@/components/Cart/ClearCartPaid";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";

const SuccessPage = async () => {
  const session = await getServerSession();

  if( !session)    
    {
      redirect("/")
    }
    
  return (
    <>
      <div className='a_page'>
        <Clearcart/>
        <ul className="steps pb-10 sm:mx-5">
          <li data-content="✓" className="step step-primary ">Purchase success!!!</li>
          <li className="step step-primary flex ">Preparing Order <span className="animate-ping">...</span></li>
          <li className="step step-primary flex ">Shipping <span className="animate-ping">...</span></li>
          <li className="step step-primary flex ">Order Deliver <span className="animate-ping">...</span></li>
        </ul>
        <div className=' w-[400px] xl:w-[800px] h-[800px] justify-center items-center text-center'>
          <h1 className="pb-10 text-2xl text-center font-bold ">Thank you for purchase
          , your order is preparing</h1>
          <div className=" xl:flex justify-between w-full mt-5">
            <Link href="/" >
            <Button variant="classic" >Continue Shopping</Button>
            </Link>
            <Link href="/profile" >
            <Button variant="classic" >Order details</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
export default SuccessPage