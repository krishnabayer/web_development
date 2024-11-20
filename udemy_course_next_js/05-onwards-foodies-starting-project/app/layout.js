import './globals.css';
import Foodapp_header from '@/components/main-header/foodapp_header';
export const metadata = {
  title: 'NextLevel Food',
  description: 'Delicious meals, shared by a food-loving community.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Foodapp_header/>
        {children}
      </body>
    </html>
  );
}
