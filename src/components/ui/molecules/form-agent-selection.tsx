"use client";
import { FormEventHandler, useState } from "react";
import { Button } from "@/components/ui/atoms/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../atoms/select";
import Image from "next/image";
import { useRouter } from 'next/navigation';

const FormAgentSelection = ({ data }: { data: any }) => {
  const router = useRouter();

  const handleSubmit = (event: { preventDefault: () => void; target: HTMLFormElement | undefined; }) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const heroName = formData.get('agent-select');
    const heroId = data.find((item: any) => item.name === heroName)?.id;

    if (heroId) {
      router.push(`/dashboard/perfil/${heroId}`);
    }
  };

  return (
    <form onSubmit={handleSubmit as unknown as FormEventHandler<HTMLFormElement>}>
      <Select name="agent-select" required>
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
      <Button size="lg" className="w-full mt-4">entrar</Button>
    </form>
  )
}

export default FormAgentSelection

