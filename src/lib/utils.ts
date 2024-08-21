// TODO: function to capitalize first letter of todo

// Temporary util func to make sure id is unique
export const getMaxIdFromList = <T extends { id: number }>(
  list: T[]
): number => {
  const maxId = list.length > 0 ? Math.max(...list.map((item) => item.id)) : 0;
  return maxId;
};
