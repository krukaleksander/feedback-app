import {
  IApi,
  IQuestionnaire,
  IRequest,
  IResponse,
} from "../questionnaireInterfaces";

export class Api implements IApi {
  getQuestionnaire(id: string): Promise<IQuestionnaire> {
    throw new Error("Method not implemented.");
  }
  submitQuestionnaire(request: IRequest): Promise<IResponse> {
    return new Promise((resolve) => {
      message: "ok";
    });
  }
}
