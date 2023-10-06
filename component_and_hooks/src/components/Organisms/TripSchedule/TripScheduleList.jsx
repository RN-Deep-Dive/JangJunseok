import { SectionList, Text, View } from "react-native";
import TripScheduleItem from "./TripScheduleItem";
import TripScheduleListHeader from "./TripScheduleListHeader";
import Spacer from "../../Atoms/Spacer";
import TripScheduleHeader from "./TripScheduleHeader";

const renderItem = ({ item, index }) => (
  <TripScheduleItem
    titleText={item}
    orderIndex={index}
    subTitleText={item}
  ></TripScheduleItem>
);

const ItemSeparatorComponent = () => <Spacer margin={5}></Spacer>;

const renderSectionHeader = ({ section }) => (
  <TripScheduleListHeader title={section.title}></TripScheduleListHeader>
);

const ListHeaderComponent = () => <TripScheduleHeader></TripScheduleHeader>;

export default ({ sections }) => {
  return (
    <SectionList
      renderItem={renderItem}
      sections={sections}
      renderSectionHeader={renderSectionHeader}
      ItemSeparatorComponent={ItemSeparatorComponent}
      ListHeaderComponent={ListHeaderComponent}
      stickySectionHeadersEnabled={true}
    ></SectionList>
  );
};
