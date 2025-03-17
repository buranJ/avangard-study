import React from 'react';

import { AlertCircle } from 'lucide-react';

interface ErrorBoundaryState {
  hasError: boolean;
}

interface ErrorBoundaryProps extends React.PropsWithChildren {
  fallback?: React.ReactNode;
}

const ErrorComponent = () => {
  const handleGoHome = () => {
    window.location.href = '/';
  };

  const handleRetry = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center space-y-6">
        <div className="flex justify-center">
          <AlertCircle className="w-16 h-16 text-red-500 animate-bounce" />
        </div>
        
        <div className="space-y-3">
          <h1 className="text-3xl font-bold text-gray-900">
            Что-то пошло не так
          </h1>
          <p className="text-gray-600">
            Произошла ошибка при загрузке страницы. Пожалуйста, попробуйте вернуться на главную страницу или обновите текущую.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button 
            onClick={handleRetry}
            className="px-6 py-2 bg-white border-2 border-red-500 text-red-500 rounded-lg 
                     hover:bg-red-50 transition-colors duration-200 font-medium"
          >
            Попробовать снова
          </button>
          
          <button 
            onClick={handleGoHome}
            className="px-6 py-2 bg-red-500 text-white rounded-lg 
                     hover:bg-red-600 transition-colors duration-200 font-medium"
          >
            На главную
          </button>
        </div>
      </div>
    </div>
  );
};

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public state: ErrorBoundaryState = {
    hasError: false
  };

  public static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return this.props.fallback || <ErrorComponent />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;