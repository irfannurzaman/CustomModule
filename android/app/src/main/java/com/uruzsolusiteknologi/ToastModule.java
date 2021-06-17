package com.uruzsolusiteknologi;


import androidx.widget.Toast;

import com.facebook.react.bridge.ReactApplictationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;


public class CustomeModule extends ReactContextBaseJavaModule {
    private static ReactApplictationContext reactContext;

    CustomeModule(ReactApplictationContext context){
        super(context);
        reactContext = context;
    }

    @ReactMethod
    public void show(){
        Toast.makeText(reactContext, "Hi From Android", Toast.LENGTH.LONG).show();
    }

    @NonNull
    @Override
    public String getName(){
        return "CustomeModule";
    }
    
}