import ListModel from "@/graphql/models";

export const deleteList = async (_: any, { id }: any) => {
  try {
    const response = await ListModel.findByIdAndDelete(id, { new: true });
    console.log("Successfully Deleted");
    return response;
  } catch (err) {
    throw new Error("Failed To Delete Item");
  }
};
