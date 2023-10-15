import Block from "../../core/Block";
import { User } from "../../types.global";

interface Props {
  editMode: boolean;
  user: User;
}

export class ProfileMain extends Block<Props> {
  constructor(props: Props) {
    super({
      ...props,
      editMode: false,
    });
  }

  protected render(): string {
    const { editMode } = this.props as Props;

    return editMode
      ? '{{{ ProfileEdit user=user ref="ProfileEdit" }}}'
      : '{{{ ProfileInfo user=user ref="ProfileInfo" }}}';
  }
}
