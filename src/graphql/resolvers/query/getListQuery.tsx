import ListModel from "@/graphql/models";

export const getListQuery = async () => {
  try {
    const list = await ListModel.find({});
    console.log(list);
    return list;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch list");
  }
};
