import Button from "../../atoms/Button";
import Icon from "../../atoms/Icon";

export default {
  title: "Atoms/Button",
  component: Button,
};

export const Primary = () => <Button type="primary">Button primary</Button>;
export const Secondary = () => (
  <Button type="secondary">Button secondary</Button>
);
export const WithIcon = () => (
  <Button type="secondary">
    Button secondary <Icon type="right-arrow"></Icon>
  </Button>
);
export const Tertiary = () => <Button type="tertiary">Button tertiary</Button>;
