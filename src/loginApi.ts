interface OauthLoginContentProps {
    provider: string;
}
export const oauthLogin = async (oauthLoginContent: OauthLoginContentProps) => {
    const { provider } = oauthLoginContent;
    if (!provider) {
      throw new Error('OAuth provider is required');
    }
  
    window.location.href = `https://ulleong-idbiv.run.goorm.site/api/auth/${provider}`;
};