import { Flex } from "native-base";
import SmallCard from "../../components/SmallCard";

const DUMMY_DATA = [
  {
    title: "Clementina#45",
    discription: "Pablo Picasso",
    credits: 45,
    id: 1,
  },
  {
    title: "Clementina#45",
    discription: "Pablo Picasso",
    credits: 45,
    id: 2,
  },
];

const BlockchainGoodsNestedScreen: React.FC = () => {
  return (
    <>
      <Flex flex={1} bg="white" flexDir="row" justifyContent="space-between">
        {DUMMY_DATA.map((item) => (
          <SmallCard
            key={item.id}
            title={item.title}
            description={item.discription}
            credits={item.credits}
            id={item.id}
          />
        ))}
      </Flex>
      <Flex flex={1} bg="white" flexDir="row" justifyContent="space-between">
        {DUMMY_DATA.map((item) => (
          <SmallCard
            key={item.id}
            title={item.title}
            description={item.discription}
            credits={item.credits}
            id={item.id}
          />
        ))}
      </Flex>
    </>
  );
};

export default BlockchainGoodsNestedScreen;
