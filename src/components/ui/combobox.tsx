import { useEffect, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import Glass from "@/assets/images/hero-section/glass.png";
import Image from "next/image";

export function Combobox({
  searchValue,
  seachValueHandler,
  data,
  onSelect,
}: {
  searchValue: any;
  seachValueHandler: (e: any) => void;
  data: any;
  onSelect: (e: any) => void;
}) {
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const inputRef: any = useRef(null);
  const popoverRef: any = useRef(null);

  const handleClickOutside = (event: any) => {
    if (popoverRef.current && !popoverRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const selectValueHandler = (value: any) => {
    onSelect(value);
    setSelectedValue(value);
    setOpen(false);
    seachValueHandler({ target: { value } });
  };
  return (
    <Popover open={open}>
      <PopoverTrigger asChild>
        <div
          className="w-full flex justify-between items-center "
          onClick={() => setOpen(true)}
          ref={inputRef}
        >
          <Input
            className=" border-t-0 border-r-0 border-l-0 opacity-100 text-black dark:text-white rounded-none outline-none  focus:border-b-gray"
            title="Città"
            onChange={(e) => {
              seachValueHandler(e);
              setSelectedValue("");
            }}
            value={open ? searchValue : selectedValue}
          />
          <Image className="h-[25px] w-[25px] cursor-pointer absolute right-1" src={Glass} alt="" />
        </div>
      </PopoverTrigger>
      <PopoverContent
        ref={popoverRef}
        className="w-full"
        align="start"
        style={{ maxHeight: "300px", overflowY: "auto", padding: "5px" }}
      >
        <div className="flex flex-col">
          {data.length > 0 ? (
            <>
              {data.map((item: any, index: number) => (
                <div
                  key={index}
                  className="my-1 hover:bg-primary px-2 py-1 cursor-pointer rounded-md"
                  onClick={() => selectValueHandler(item)}
                >
                  <span>{item}</span>
                </div>
              ))}
            </>
          ) : (
            <div className="my-1 hover:bg-primary px-2 py-1 cursor pointer">
              {searchValue == "" ? <span>Type to search!</span> : <span>Data not found!</span>}
            </div>
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
}
