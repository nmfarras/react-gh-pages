import { BookList } from "../../components/BookList";

const DashboardContainer = () => {
    const data = [
        {
            title: 'Mechanics of Material',
            author: 'Hibbeler',
            price: 50000,
            quantity: 10,
            status: 'Available'
        },
        {
            title: 'Guided Weapon Control Systems',
            author: 'Powell Garnell',
            price: 120000,
            quantity: 100,
            status: 'Available'
        },
        {
            title: 'Modern Control Engineering',
            author: 'Katsuhiko Ogata',
            price: 240000,
            quantity: 0,
            status: 'Not Available'
        },
        {
            title: 'Advanced Control of Aircraft, Spacecraft, and Rocket',
            author: 'Ashish Tewari',
            price: 70000,
            quantity: 0,
            status: 'Not Available'
        },
        {
            title: 'Civil Avionics Systems',
            author: 'Ian Moir',
            price: 90000,
            quantity: 2,
            status: 'Available'
        },
    ]
    return (
        <div>
            <h1>Dashboard</h1>
            <BookList list={data}/>
        </div>
    )
}

export default DashboardContainer;