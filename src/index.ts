type RobotType = "Cleaner" | "Waiter" | "Developer";

const getSuperName = (): string => {
  const randomChars: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const randomNumbers: string = "0123456789";
  let newName = "";
  for (let i = 0; i < 3; i++) {
    newName += randomChars.charAt(
      Math.floor(Math.random() * randomChars.length)
    );
  }
  for (let i = 0; i < 2; i++) {
    newName += randomChars.charAt(
      Math.floor(Math.random() * randomNumbers.length)
    );
  }
  return newName;
};
class Robot {
  name: string;
  batery: number = 100;
  type;

  constructor(type: RobotType) {
    this.name = getSuperName();
    this.type = type;
  }

  reset() {
    this.name = getSuperName();
    this.batery = 100;
  }
}
