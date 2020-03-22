import { Header } from '../components/Header';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

export const GlobalLayout = ({ children }) => (
  <div style={layoutStyle}>
    <Header/>
    {children}
  </div>
);
