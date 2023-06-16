import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectFilter } from '../../redux';

export default function Filer() {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const onChange = e => {
    const input = e.currentTarget.value;
    dispatch(changeFilter(input));
  };
  return (
    <label className={css.contact__lable}>
      Find contacts by name
      <input
        className={css.contact__input}
        onChange={onChange}
        value={filter}
        type="text"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </label>
  );
}
