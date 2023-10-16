import Block from "../../core/Block.ts";
import { User } from "../../types.global.ts";

interface IProps {
  editMode: boolean;
  user: User;
}

export class ProfileMain extends Block<IProps> {
  constructor(props: IProps) {
    super({
      ...props,
      editMode: false,
    });
  }

  protected render(): string {
    const { editMode } = this.props as IProps;

    return editMode
      ? '{{{ ProfileEdit user=user ref="ProfileEdit" }}}'
      : '{{{ ProfileInfo user=user ref="ProfileInfo" }}}';
  }
}
