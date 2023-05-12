interface IProps {
  message: string;
  large?: boolean;
  type: 'error' | 'success' | 'info';
}

const backgroundByType = {
  error: 'bg-red-600',
  success: 'bg-green-600',
  info: 'bg-blue-600',
};

const MessageBox = ({ message, large, type }: IProps) => {
  let sizeClasses = 'px-2 py-1 mt-2';

  if (large) sizeClasses = 'mt-8 font-sans font-bold p-6 mx-10';

  return (
    <>
      {message && (
        <div className=''>
          <div
            className={`rounded-md border   text-center text-white ${backgroundByType[type]} ${sizeClasses}`}
          >
            {message}
          </div>
        </div>
      )}
    </>
  );
};

export default MessageBox;
