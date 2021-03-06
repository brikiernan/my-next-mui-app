import Link from 'next/link';

import { User } from '../lib/interfaces';

type Props = {
  data: User;
};

const ListItem = ({ data }: Props) => (
  <Link href='/users/[id]' as={`/users/${data.id}`}>
    <a>
      {data.id}: {data.name}
    </a>
  </Link>
);

export default ListItem;
