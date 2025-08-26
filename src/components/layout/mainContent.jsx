import background from '../../assets/bg.png';

export default function MainContent({ children}) {
    return (
        <main className="w-full h-screen flex items-start pt-20 justify-center gap-30"  style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover' }}>
            {children}
        </main>
    );
}