import { Button } from "Shared/ui/Button/Button";
import Dark from "assets/dark.svg";
import { useTheme } from "Shared/lib/theme";

interface ISwitcherTheme {}

export const SwitcherTheme = () => {
  const { changeTheme } = useTheme();
  const handlerSwitchTheme = () => {
    changeTheme();
  };
  return (
    <Button theme="empty">
      <Dark onClick={handlerSwitchTheme} />
    </Button>
  );
};
