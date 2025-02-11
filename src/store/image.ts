import { create } from "zustand";

type ImageStoreState = {
  image: string | null;
  setImage: (image: string | null) => void;
  handleImage: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
const useImageStore = create<ImageStoreState>((set) => ({
  image: null,
  setImage: (image) => set({ image }),
  handleImage: (e) => {
    const files = e.target.files?.[0];
    if (files) {
      const reader = new FileReader();
      reader.onloadend = () => {
        set({ image: reader.result as string });
      };
      reader.readAsDataURL(files);
    }
  },
}));


export default useImageStore