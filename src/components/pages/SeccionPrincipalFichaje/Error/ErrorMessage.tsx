interface IError {
  message: string;
  large?: boolean;
}

const ErrorMessage = ({ message, large }: IError) => {
  let sizeClasses = 'px-2 py-1 mt-2';

  if (large) sizeClasses = 'mt-8 font-sans font-bold p-6 mx-10';

  return (
    <>
      {message && (
        <div className=''>
          <div className={`rounded-md border bg-red-600  text-center text-white ${sizeClasses}`}>
            {message}
          </div>
        </div>
      )}
    </>
  );
};

export default ErrorMessage;
