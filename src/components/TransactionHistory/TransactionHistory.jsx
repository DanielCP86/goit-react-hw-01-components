import PropTypes, { object } from 'prop-types';
import styles from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.transaction__history}>
      <thead className={styles.header}>
        <tr>
          <th className={styles.cellHeader}>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => {
          return (
            <tr className={styles.row} key={item.id}>
              <td className={styles.cell}>{item.type}</td>
              <td className={styles.cell}>{item.amount}</td>
              <td className={styles.cell}>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(object).isRequired,
};
