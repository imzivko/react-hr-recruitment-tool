import { useQueryParam, decodeString, encodeString } from 'use-query-params';
import { ApplicationType } from './ApplicationTypeSelector';

const useApplicationTypeSelector = () => {
  const [applicationType, setApplicationType] = useQueryParam<ApplicationType>('application_type', {
    decode: val => decodeString(val) as ApplicationType,
    encode: val => encodeString(val),
  });

  const handleApplicationTypeChange = (newType: ApplicationType) => {
    setApplicationType(newType, 'pushIn');
  };

  return {
    applicationType: applicationType || ApplicationType.RECEIVED,
    handleApplicationTypeChange,
  };
};

export default useApplicationTypeSelector;
