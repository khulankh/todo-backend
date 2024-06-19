import { ListItem } from "@/generated";
import ListModel from "@/graphql/models";

export const createList = async (_: any, { item }: { item: ListItem }) => {
  console.log(item);
  try {
    const list = await new ListModel({
      title: item.title,
      statusType: item.statusType,
    }).save();
    console.log(list);
    return list;
  } catch (err) {
    console.error("Error creating list:", err);
    throw new Error("Failed To Create List");
  }
};
