import { Typography } from "../atoms/typography";

const ProfileContentPanel = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mt-7 rounded-2xl py-10 px-6 sm:px-8 mr-8 sm:mr-14 shadow-lg flex sm:flex-row flex-col gap-7">
      {children}
    </div>
  );
};

const ProfileContentPanelList = ({ data }: { data: any[] }) => {
  const splitChunks = (array: any[], size: number) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += size) {
      chunks.push(array.slice(i, i + size));
    }
    return chunks;
  }

  const NotFoundMessage = () => {
    return (
      <div className="flex justify-center items-center h-full">
        <Typography className="text-center">Nenhum item encontrado</Typography>
      </div>
    )
  }

  const splitedData = splitChunks(data, 10);

  return (
    <div className="flex flex-wrap md:gap-12">
      {splitedData.length > 0 ? splitedData.map((chunk, index) => (
        <ul key={index} className="list-disc max-h-[80%] mr-4">
          {chunk.map((comic: any) => (
            <li key={comic.name}>
              <Typography className="text-sm font-semibold text-gray-500">{comic.name}</Typography>
            </li>
          ))}
        </ul>
      )) : <NotFoundMessage />}
    </div>
  );
};

export { ProfileContentPanel, ProfileContentPanelList };