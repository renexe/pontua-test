"use client";
import LoginTemplate from "@/components/ui/templates/login-template";
import RecoverPasswordTemplate from "../templates/recover-password-template";
import RecoverPasswordConfirmTemplate from "../templates/recover-password-confirm-template";
import AgentSelectionTemplate from "../templates/agent-selection-template";
import { useEffect, useState } from "react";

const OnboardingTemplateController = ({ heroes }: { heroes: any }) => {
  const [currentTemplate, setCurrentTemplate] = useState(<></>)

  const templates = {
    login: <LoginTemplate
      recoverPasswordCallback={() => setCurrentTemplate(templates.recoverPassword)}
      successfullLoginCallback={() => setCurrentTemplate(templates.agentSelection)}
    />,
    recoverPassword: <RecoverPasswordTemplate
      recoverPasswordCallback={() => setCurrentTemplate(templates.recoverPasswordConfirm)}
    />,
    recoverPasswordConfirm: <RecoverPasswordConfirmTemplate
      backToLoginCallback={() => setCurrentTemplate(templates.login)}
    />,
    agentSelection: <AgentSelectionTemplate heroes={heroes.data.results} />
  }

  const verifySessionCookkie = () => {
    const session = document.cookie.match(/session=[^;]+/)

    if (session) {
      setCurrentTemplate(<AgentSelectionTemplate heroes={heroes.data.results} />)
    } else {
      setCurrentTemplate(templates.login)
    }
  }

  useEffect(() => {
    verifySessionCookkie()
  }, [])

  return currentTemplate
}

export default OnboardingTemplateController