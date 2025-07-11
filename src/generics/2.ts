type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare(
  top: Pick<AllType, "name" | "color">,
  bottom: Pick<AllType, "position" | "weight">
): AllType {
  return {
    weight: bottom.weight,
    name: top.name,
    color: top.color,
    position: bottom.position,
  };
}
