import { FlatList } from "native-base";
import React from "react";
import { ListRenderItemInfo } from "react-native";
import CardComp from "../../components/CardComp";

type DataObj = {
  title: string;
  description: string;
  credits: number;
  timer: string;
};

const DUMMY_DATA: DataObj[] = [
  {
    title: "30% off on Caribean Bracelets",
    description: "Get beautiful hand made bracelets for 30% discount.",
    credits: 45,
    timer: "453 remaining",
  },
  {
    title: "Ecofriendly Water Cups",
    description: "Get a ecofriendly water cup for 430 carbon credits.",
    credits: 45,
    timer: "remaining",
  },
];

const PhysicalGoodsNestedScreen: React.FC = () => {
  function renderItemHandler(itemData: ListRenderItemInfo<DataObj>) {
    const item = itemData.item;

    return (
      <CardComp
        title={item.title}
        description={item.description}
        timer={item.timer}
        credits={item.credits}
      />
    );
  }

  return (
    <FlatList
      data={DUMMY_DATA}
      renderItem={renderItemHandler}
      bg="white"
      showsVerticalScrollIndicator={false}
    />
  );
};

export default PhysicalGoodsNestedScreen;
