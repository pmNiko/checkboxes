import { Toaster } from 'react-hot-toast'

export const ToastNotifications = () => {
    return (
        <Toaster
            position="top-center"
            reverseOrder={false}
            gutter={10}
            toastOptions={{
                success: {
                    duration: 3000,
                    style: {
                        background: '#1e90ff',
                        color: 'white',
                        fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
                        fontSize: '12px',
                    },
                },
                loading: {
                    duration: 3000,
                    style: {
                        background: '#1e90ff',
                        color: 'white',
                        fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
                        fontSize: '12px',
                    },
                },
                error: {
                    duration: 4000,
                    style: {
                        background: '#fffff',
                        color: 'black',
                        fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
                        fontSize: '12px',
                    },
                },
            }}
        />
    )
}
