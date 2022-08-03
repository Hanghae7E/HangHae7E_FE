/* eslint-disable no-tabs */
import { FieldValues } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';

import postApi from '../../../Api/postApi';
import { ErrorStatusInfo, ITag } from '../../../TypeInterface/postType';

function usePostRecruitMutation(
  hashTag:Array<ITag>,
  startDate:string | undefined,
  endDate:string | undefined,
  dueDate:string | undefined,
  imgName: File | undefined,
  setDoubleSubmitFlag: React.Dispatch<React.SetStateAction<boolean >>,
  modalClose: React.Dispatch<React.SetStateAction<boolean | number>>,
  modalClose2?: React.Dispatch<React.SetStateAction<boolean | number>>,
  setError?: React.Dispatch<React.SetStateAction<string>>,

) {
  const query = useQueryClient();
  return useMutation((form: FieldValues) => postApi.postRecruitPost(
    form,
    hashTag,
    startDate,
    endDate,
    dueDate,
    imgName,
  ), {
    onSuccess: () => {
      modalClose(true);
      query.invalidateQueries(['recruit_posts', 'recommend_post']);
    },
    onError: (msg:ErrorStatusInfo) => {
      if (setError && modalClose2) {
        setError(msg.response.data.message);
        modalClose2(true);
      }
      setDoubleSubmitFlag(false);
    },
  });
}

export default usePostRecruitMutation;
