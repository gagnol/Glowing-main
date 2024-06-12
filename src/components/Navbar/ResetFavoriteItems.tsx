import { resetFavorite } from "@/store/nextSlice";
import { Button } from "@radix-ui/themes";
import { useDispatch } from "react-redux";

const ResetFavoriteItems = () => {
  const dispatch = useDispatch();
  const handleResetCart = () => {
    const confirmReset = window.confirm(
      "Estás seguro de eliminar la lista?"
    );
    if (confirmReset) {
      dispatch(resetFavorite());
    }
  };
  return (
    <div className="max-w-screen-xl w-full mx-auto justify-center items-center">
    <Button variant="surface" color="ruby" size="3"
      onClick={handleResetCart}
     
    >
      Clear list
    </Button>
    </div>
  );
};

export default ResetFavoriteItems;