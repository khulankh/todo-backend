import ListModel from "@/graphql/models";

export const updateList = async (_: any, { id, item }: any) => {
  const { title, statusType } = item;
  console.log(item);
  try {
    const updated = await ListModel.findByIdAndUpdate(
      id,
      { title, statusType },
      { new: true }
    );
    console.log("Successfully Updated");
    return updated;
  } catch (error) {
    console.log(error);
  }
};
