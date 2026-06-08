import { getCategories } from '@/lib/api'
import Link from 'next/link'
import css from "./SidebarNotes.module.css"
const Parallel = async () => {
  const categories = await getCategories()

  return (
    <aside>
      <ul className={css.menuList}>
        <li className={css.menuItem}>
          <Link href={`/notes/filter/all`} className={css.menuLink}>All notes</Link>
        </li>
        {categories.map((cat) => (
          <li key={cat.id} className={css.menuItem}>
            <Link href={`/notes/filter/${cat.id}`} className={css.menuLink}>{cat.name}</Link>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default Parallel

