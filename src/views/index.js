const script = `
<script>
    //Configs
    let FPTAppCode = '{{botCode}}'
    let FPTAppName = '{{headerText}}'
    
    //Define custom styles
    
    //Set Configs
    let FptLiveChatConfigs = {
        appName: FptAppName,
        appCode: FptAppCode,
        themes: '',
        styles: CustomStyles,
        extra_info: []
    }
    //Init
    FptLiveChatScript.onload = functions () {
        fpt_ai_render_chatbox(FptLiveChatConfigs)
    }
</script>
`