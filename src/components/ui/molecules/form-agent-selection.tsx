import { Button } from "@/components/ui/atoms/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../atoms/select";
import Image from "next/image";

const FormAgentSelection = ({ data }: { data: any }) => {
  return (
    <form>
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Selecione um agente" />
        </SelectTrigger>
        <SelectContent>
          {data && data.map((item: any) => (
            <SelectItem key={item.id} value={item.name}>
              <div className="flex gap-2">
                <Image
                  src={item.thumbnail.path + '.' + item.thumbnail.extension}
                  alt=""
                  width={24}
                  height={24}
                  className="rounded-full flex-1 max-h-[24px] "
                />
                {item.name}
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Button className="w-full mt-4">entrar</Button>
    </form>
  )
}

export default FormAgentSelection

